"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/image-upload"
import { Sparkles } from "lucide-react"

type UserType = "individuals" | "business" | "creator"
type CustomType = "diy" | "inspired" | "original"
type SkillLevel = "beginner" | "intermediate" | "advanced"

export function GenerateForm() {
  const [userType, setUserType] = useState<UserType>("individuals")
  const [custom, setCustom] = useState<CustomType>("diy")
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner")
  const [designDescription, setDesignDescription] = useState("")
  const [images, setImages] = useState<Array<{ id: string; url: string; view: "front" | "back" }>>([])

  const isValid = designDescription.length > 0 && images.length > 0

  return (
    <Card className="border-border bg-card p-3 shadow-lg sm:p-4 md:p-4">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground sm:mb-3 sm:text-xl">Inputs</h2>

          {/* User Type Toggle */}
          <div className="mb-3 space-y-2 sm:mb-4">
            <Label className="text-xs text-foreground sm:text-sm">User Type</Label>
            <div className="flex w-full rounded-lg border border-border bg-secondary p-1 md:inline-flex">
              {(["individuals", "creator", "business"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setUserType(type)}
                  className={`flex-1 rounded-md px-3 py-2 text-xs font-medium capitalize transition-all duration-200 sm:px-4 sm:text-sm md:flex-none ${
                    userType === type
                      ? "bg-background text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  for {type}
                </button>
              ))}
            </div>
          </div>

          {/* Custom section */}
          <div className="mb-3 space-y-2 sm:mb-4">
            <Label className="text-xs text-foreground sm:text-sm">Custom</Label>
            <div className="flex w-full flex-col gap-1 rounded-lg border border-border bg-secondary p-1 sm:flex-row md:inline-flex">
              {(["diy", "inspired", "original"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setCustom(type)}
                  className={`flex-1 rounded-md px-2 py-2 text-xs font-medium transition-all duration-200 sm:px-3 sm:text-sm md:flex-none ${
                    custom === type
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type === "diy" ? "DIY" : type === "inspired" ? "Inspired Creation" : "Original Design"}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Level section that appears when DIY is selected */}
          {custom === "diy" && (
            <div className="mb-3 space-y-2 sm:mb-4">
              <Label className="text-xs text-foreground sm:text-sm">Skill Level</Label>
              <div className="flex w-full rounded-lg border border-border bg-secondary p-1 md:inline-flex">
                {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSkillLevel(level)}
                    className={`flex-1 rounded-md px-2 py-2 text-xs font-medium capitalize transition-all duration-200 sm:px-4 sm:text-sm md:flex-none ${
                      skillLevel === level
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Design Description Field */}
        <div className="space-y-2">
          <Label htmlFor="design-description" className="text-xs text-foreground sm:text-sm">
            Describe your design
          </Label>
          <Textarea
            id="design-description"
            placeholder="Cool Y2K flared denim pants"
            value={designDescription}
            onChange={(e) => setDesignDescription(e.target.value)}
            maxLength={200}
            className="min-h-[70px] resize-none border-border bg-input text-sm text-foreground placeholder:text-muted-foreground sm:min-h-[80px]"
          />
          <p className="text-xs text-muted-foreground">{designDescription.length}/200 characters</p>
        </div>

        {/* Source Items Upload */}
        <div className="space-y-2">
          <Label className="text-xs text-foreground sm:text-sm">Source Items</Label>
          <ImageUpload images={images} onChange={setImages} />
          <p className="text-xs text-muted-foreground">Upload 2-6 images (JPG, PNG, WebP • Max 10MB each)</p>
        </div>

        {/* Generate Button */}
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={!isValid}>
          <Sparkles className="mr-2 h-4 w-4" />
          <span className="text-sm sm:text-base">Generate Design</span>
        </Button>
      </div>
    </Card>
  )
}
