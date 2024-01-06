import { Container, RootLayout } from "~/components";
import { Button } from "~/components/ui/button";
import { type NextPageWithLayout } from "~/types";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(150),
  category: z.string({
    required_error: "Please select a product category.",
  }),
  price: z.number().gt(0),
})

const Sell: NextPageWithLayout = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <Container>
        <div className="text-lg p-4 sm:p-6 flex justify-between items-center">
          <h1>Post an Ad</h1>
          <div className="flex gap-4">
            <Button variant="secondary">Save as Draft</Button>
            <Button>Publish</Button>
          </div>
        </div>
        <hr />
        <div className="p-4 sm:p-6 flex flex-wrap-reverse justify-between gap-2">
          <div className="grow-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <h1 className="text-xl font-bold">Base Information</h1>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
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
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Give a bried description of the item"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="books">Books</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h1 className="text-xl font-bold">Images</h1>
                <div>
                  <div id="image-preview" className="flex p-1 bg-secondary"></div>
                  <Label htmlFor="picture">Upload an image</Label>
                  <Input id="picture" type="file" accept="image/*" multiple />
                </div>
                <h1 className="text-xl font-bold">Price</h1>
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (₹)</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
          <div className="grow">
            <h1 className="text-lg font-bold pb-2">Preview</h1>
          </div>
        </div>
      </Container>
    </>
  )
}

Sell.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default Sell
