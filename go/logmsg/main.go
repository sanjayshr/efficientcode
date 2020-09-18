package main

import (
	"fmt"
)

type demo struct {
	a1 int
	b2 string
	c3 float64
}

func main() {
	fmt.Println("Hello, playground")
	d := demo{
		a1: 12345,
		b2: "hi there",
		c3: 3.14,
	}
	fmt.Printf("demo %#v\n", d)
	fmt.Printf("demo %+v\n", d)
	fmt.Printf("demo %v\n", d)
}
