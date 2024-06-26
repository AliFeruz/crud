import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { NoteValidation } from "@/lib/validation";
import { useToast } from "../ui/use-toast";
import { Note } from "@/types";
import { useSession } from "next-auth/react";
import axios from 'axios';

type PostFormProps = {
  action: 'Create'| 'Update';
  note?: Note;
  onSuccess?: () => void; 
}

const NoteForm = ({ action, note, onSuccess} : PostFormProps) => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof NoteValidation>>({
    resolver: zodResolver(NoteValidation),
    defaultValues: {
      author: session?.user?.email || '',
      title: note?.title || "",
      text: note?.text || "",
    },
  });

  async function onSubmit(values: z.infer<typeof NoteValidation>) {
    try {
      const data = {
        author: values.author,
        title: values.title,
        text: values.text
      };
      if(note){
        const response = await axios.put('/api/notes', {...data, _id: note._id})
        if (response.status === 200) {
          toast({ title: "Note edited successfully!" });
          onSuccess && onSuccess(); 
        } else {
          toast({ title: "Editing failed. Please try again later." });
        }
      } 
      if(action === 'Create'){
        const response = await axios.post('/api/notes', data);
        if (response.status === 200) {
          toast({ title: "Note saved successfully!" });
          onSuccess && onSuccess(); 
        } else {
          toast({ title: "Failed to save note. Please try again later." });
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({ title: "An unexpected error occurred. Please try again." });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex rounded-lg flex-col gap-6 w-full max-w-5xl">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex gap-1 flex-col">
              <FormLabel className="shad-form_label">Title</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="shad-form_label">Text</FormLabel>
              <FormControl>
                <Textarea className="shad-textarea p-1 custom-scrollbar" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message"/>
            </FormItem>
          )}
        />
        <div className="flex justify-around">
        <Button type="submit" className="shad-button_primary whitespace-nowrap">
          {action === 'Update' ? 'Update' : 'Save'}
        </Button>
        {action === "Update" && (
          <Button className="shad-button_primary whitespace-nowrap">
            Cancel
          </Button>
        )}
        </div>
      </form>
    </Form>
  );
};

export default NoteForm;
