"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Save, ShoppingCart, Upload, X, ImageIcon, Sparkles } from "lucide-react"
import { OrderModal } from "@/components/order-modal"

export function PreviewPanel() {
  const [selectedView, setSelectedView] = useState<"front" | "back">("front")
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [tryOnImage, setTryOnImage] = useState<string | null>(null)

  // Mock data - in real app this would come from generation
  const hasVariations = false

  const handleTryOnImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setTryOnImage(url)
    }
  }

  const removeTryOnImage = () => {
    setTryOnImage(null)
  }

  return (
    <>
      <Card className="border-border bg-card p-3 shadow-lg sm:p-4 md:p-4">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Preview</h2>

          {!hasVariations ? (
            <div className="flex aspect-[3/4] items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 sm:aspect-[4/5]">
              <div className="text-center px-4">
                <p className="text-xs text-muted-foreground sm:text-sm">Your generated designs will appear here</p>
              </div>
            </div>
          ) : (
            <>
              {/* View Toggle */}
              <div className="flex justify-center">
                <div className="inline-flex w-full rounded-lg border border-border bg-secondary p-1 sm:w-auto">
                  <button
                    onClick={() => setSelectedView("front")}
                    className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 sm:flex-none sm:px-4 sm:text-sm ${
                      selectedView === "front"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setSelectedView("back")}
                    className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 sm:flex-none sm:px-4 sm:text-sm ${
                      selectedView === "back"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Variations Grid */}
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden rounded-lg border border-border bg-white sm:aspect-[4/5]"
                  >
                    <img
                      src={`/diverse-fashion-collection.png?height=600&width=450&query=fashion ${selectedView} view variation ${i}`}
                      alt={`Variation ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Explanation Tag */}
              <div className="rounded-lg border border-border bg-secondary/50 p-2 sm:p-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Blended elements:</span> vintage wash, minimal hardware,
                  cropped silhouette
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border bg-secondary text-foreground hover:bg-secondary/80"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  <span className="text-xs sm:text-sm">Try On</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border bg-secondary text-foreground hover:bg-secondary/80"
                >
                  <Save className="mr-2 h-4 w-4" />
                  <span className="text-xs sm:text-sm">Save</span>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setOrderModalOpen(true)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span className="text-xs sm:text-sm">Order</span>
                </Button>
              </div>
            </>
          )}

          <div className="space-y-2 border-t border-border pt-3 sm:space-y-3 sm:pt-4">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">Try-On</h3>

            {/* Try-On Image Upload Frame */}
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-dashed border-border bg-secondary/30 sm:aspect-[4/5]">
              {tryOnImage ? (
                <div className="group relative h-full w-full">
                  <img
                    src={tryOnImage || "/placeholder.svg"}
                    alt="Try-on image"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <Button size="sm" variant="destructive" onClick={removeTryOnImage}>
                        <X className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-3 sm:gap-3 sm:p-4">
                  <ImageIcon className="h-8 w-8 text-muted-foreground sm:h-10 sm:w-10" />
                  <div className="text-center">
                    <p className="text-xs font-medium text-foreground sm:text-sm">Upload your image for try-on</p>
                    <p className="mt-1 text-xs text-muted-foreground">Apply the generated design to your own image</p>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <label htmlFor="try-on-upload" className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-border bg-background text-foreground hover:bg-secondary"
                        asChild
                      >
                        <span>
                          <Upload className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">Upload Image</span>
                        </span>
                      </Button>
                    </label>
                    <input
                      id="try-on-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleTryOnImageUpload}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border bg-background text-foreground hover:bg-secondary"
                    >
                      <Save className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Import from Library</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Try-On Action Button */}
            {tryOnImage && (
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
                <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Generate Try-On</span>
              </Button>
            )}

            <p className="text-center text-xs text-muted-foreground">
              Upload your image to see how the generated design looks on it
            </p>
          </div>
        </div>
      </Card>

      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    </>
  )
}
