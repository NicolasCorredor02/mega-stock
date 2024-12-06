import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function Item({product}) {
    return(
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-center"><img src={product.image} alt={product.title}  className="max-h-[250px]"/></CardTitle>
                <CardDescription>{product.title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>${product.price}</p>
            </CardContent>
            <CardFooter>
                <Badge>{product.category}</Badge>
            </CardFooter>
        </Card>
    )
}

export default Item