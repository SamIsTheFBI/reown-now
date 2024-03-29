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
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "~/components/ui/skeleton";
import { LuShoppingBag } from "react-icons/lu";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(150),
  category: z.string({
    required_error: "Please select a product category.",
  }),
  price: z.coerce.number().gt(0),
})

const Sell: NextPageWithLayout = () => {
  const { data: sessionData } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!sessionData) {
      router.push("/sign-in")
    }
  }, [])

  const categories = api.category.list.useQuery()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    console.log(files)
  }

  const [files, setFiles] = useState<File[]>([])
  const urls = files.map((file) => URL.createObjectURL(file));

  return (
    <>
      <Container>
        <div className="text-lg p-4 sm:p-6 flex justify-between items-center">
          <h1>Post an Ad</h1>
        </div>
        <hr />
        <div className="p-4 sm:p-6 flex max-lg:flex-wrap justify-between gap-2">
          <div className="grow lg:max-w-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <h1 className="text-xl font-bold">Product Information</h1>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="" {...field} />
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
                          placeholder="Give a brief description of the item"
                          className="resize-y"
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
                          {categories?.data?.map((item) => (
                            <SelectItem key={item.route} value={item.name} className="capitalize">{item.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h1 className="text-xl font-bold">Images</h1>
                <div>
                  {urls.length > 0 &&
                    <div className="flex items-center gap-2 border-2 p-2 overflow-x-auto mb-2 rounded-md">
                      {urls.map((url, i) => {
                        const filename = files[i]?.name;
                        return (
                          <Image src={url} height={300} width={240} key={i} alt={filename!} className="object-contain aspect-square w-24" />
                        );
                      })}
                    </div>
                  }
                  <Label htmlFor="picture">Upload multiple images</Label>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const fileList = e.target.files
                      if (fileList) {
                        const fileListType = [...fileList]
                        setFiles(fileListType)
                      }
                    }}
                    multiple
                  />
                </div>
                <h1 className="text-xl font-bold">Price</h1>
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (₹)</FormLabel>
                      <FormControl>
                        <Input {...field}
                          type="number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <Button type="submit">Publish</Button>
                  <Button variant="secondary">Save as Draft</Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="grow lg:max-w-xl">
            <h1 className="text-xl font-bold pb-2">Preview</h1>
            <div className="bg-secondary aspect-video h-auto w-full rounded-md p-6">
              <div className="flex items-center justify-center">
                {urls.length > 0 &&
                  <Image
                    src={urls[0]!}
                    height={300} width={240}
                    alt="local image"
                    className="object-cover aspect-video h-auto w-full self-center rounded-md" />
                  || <Skeleton className="h-auto w-full aspect-video" />
                }
              </div>
              <div className="flex items-center justify-between mt-5 font-bold flex-nowrap gap-16 overflow-hidden text-balance">
                <h2>{form.watch('name') || "Product Name"}</h2>
                <h2><span className="text-muted-foreground">₹</span> {form.watch('price') || "Price"}</h2>
              </div>
              <div className="text-muted-foreground font-bold capitalize">{form.watch('category') || "Category"}</div>
              <div className="grid mt-5">
                <Button className="flex justify-center items-center gap-2"><LuShoppingBag /> Add to Cart</Button>
              </div>
              <div className="mt-5 text-balance">
                <p>{form.watch('description') || "Product Description"}</p>
              </div>
            </div>
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
