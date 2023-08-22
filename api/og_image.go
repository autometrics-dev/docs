package handler

import (
	"bytes"
	"image"
	"image/jpeg"
	"net/http"
	"os"
	"strings"

	gg "github.com/fogleman/gg"
)

var root string

func loadTemplate() image.Image {

	template, err := gg.LoadPNG(root + "/public/images/og_template.png")

	if err != nil {
		panic(err)
	}

	return template
}

func Handler(writer http.ResponseWriter, req *http.Request) {

	setRoot() //HACK: 🤮

	const W = 1200
	const H = 630

	template := loadTemplate()

	dc := gg.NewContext(W, H)
	dc.DrawImage(template, 0, 0)
	dc.SetRGB(1, 1, 1)

	fontErr := dc.LoadFontFace(root+"/public/resources/Inter-Bold.ttf", 96)

	if fontErr != nil {
		panic(fontErr)
	}

	//dc.DrawStringAnchored

	dc.DrawStringWrapped("This better be the longest heading in the world", W/2, (H/3)*2, 0.5, 0.5, W, 1.5, gg.AlignCenter)

	buff := new(bytes.Buffer)
	err := jpeg.Encode(buff, dc.Image(), nil)

	if err != nil {
		panic(err)
	}

	writer.Header().Set("Content-Type", "image/jpeg")
	writer.Write(buff.Bytes())

}

// HACK: This is a hack to get the root directory of the project in spite of Vercel shenanigans
func setRoot() {
	var osErr error
	root, osErr = os.Getwd()
	idx := strings.Index(root, "/.vercel")
	root = root[:idx]

	if osErr != nil {
		panic(osErr)
	}
}
