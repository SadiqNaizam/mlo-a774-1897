import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { X, Plus, UploadCloud } from 'lucide-react';

const projectFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  imageUrl: z.any().optional(), // In a real app, use z.instanceof(File) and refine
  tags: z.array(z.string()).optional(),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

// In a real app, you would pass initialData and an onSave handler as props
// interface ProjectEditorFormProps {
//   initialData?: Partial<ProjectFormValues>;
//   onSave: (data: ProjectFormValues) => void;
//   onCancel: () => void;
// }

const ProjectEditorForm: React.FC = () => {
  console.log('ProjectEditorForm loaded');
  const { toast } = useToast();
  const [tagInput, setTagInput] = useState('');
  const [fileName, setFileName] = useState('');

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: '',
      description: '',
      tags: [],
    },
    mode: 'onChange',
  });

  const handleAddTag = () => {
    if (tagInput.trim() !== '') {
      const currentTags = form.getValues('tags') || [];
      const newTags = [...currentTags, tagInput.trim()];
      form.setValue('tags', newTags, { shouldValidate: true });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const currentTags = form.getValues('tags') || [];
    const newTags = currentTags.filter((tag) => tag !== tagToRemove);
    form.setValue('tags', newTags, { shouldValidate: true });
  };

  function onSubmit(data: ProjectFormValues) {
    // In a real app, you would call the onSave prop here
    console.log('Form submitted with data:', data);
    toast({
      title: 'Project Saved!',
      description: `The project "${data.title}" has been successfully saved.`,
    });
    // Potentially call a prop to navigate away, e.g., onSave(data)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Create a New Project</CardTitle>
        <CardDescription>
          Fill in the details below to add a new project to your portfolio.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Personal Portfolio Website" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project, its goals, and your role."
                      className="resize-y min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Project Image</FormLabel>
                  <FormControl>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                       <div className="flex flex-col items-center justify-center pt-5 pb-6">
                         <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                         <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                         </p>
                         {fileName && <p className="text-xs text-muted-foreground">{fileName}</p>}
                       </div>
                       <Input 
                         type="file" 
                         className="hidden"
                         accept="image/*"
                         onChange={(e) => {
                           if (e.target.files && e.target.files.length > 0) {
                             onChange(e.target.files[0]);
                             setFileName(e.target.files[0].name);
                           }
                         }}
                         {...rest}
                       />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Technologies / Skills</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., React"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={handleAddTag}>
                  <Plus className="h-4 w-4 mr-2" /> Add Tag
                </Button>
              </div>
              <FormDescription>
                Press Enter or click "Add Tag" to add a new skill.
              </FormDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                {form.watch('tags')?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                    <button
                      type="button"
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </FormItem>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="ghost">Cancel</Button>
            <Button type="submit">Save Project</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ProjectEditorForm;