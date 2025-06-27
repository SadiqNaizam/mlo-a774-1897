import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Check } from 'lucide-react';
import { cn } from "@/lib/utils";

type Theme = 'light' | 'dark';

// Predefined accent colors for the user to choose from
const accentColors = [
  { name: 'slate', hex: '#64748b', class: 'bg-slate-500' },
  { name: 'red', hex: '#ef4444', class: 'bg-red-500' },
  { name: 'orange', hex: '#f97316', class: 'bg-orange-500' },
  { name: 'green', hex: '#22c55e', class: 'bg-green-500' },
  { name: 'blue', hex: '#3b82f6', class: 'bg-blue-500' },
  { name: 'violet', hex: '#8b5cf6', class: 'bg-violet-500' },
];

const ThemeCustomizer: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedColor, setSelectedColor] = useState(accentColors[4]); // Default to blue

  console.log('ThemeCustomizer loaded');

  const handleThemeChange = (value: string) => {
    if (value === 'light' || value === 'dark') {
      setTheme(value);
      console.log(`Theme changed to: ${value}`);
      // In a real app, you'd likely call a context function here
      // to update the theme globally, e.g., document.documentElement.classList.toggle('dark', value === 'dark');
    }
  };

  const handleColorChange = (color: typeof accentColors[0]) => {
    setSelectedColor(color);
    console.log(`Accent color changed to: ${color.name}`);
    // In a real app, this would update CSS variables
    // document.documentElement.style.setProperty('--primary-color', color.hex);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Customization</CardTitle>
        <CardDescription>
          Adjust the global appearance of your portfolio. Changes will be reflected on your public site.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="theme-toggle">Theme</Label>
          <ToggleGroup
            id="theme-toggle"
            type="single"
            value={theme}
            onValueChange={handleThemeChange}
            className="w-full grid grid-cols-2"
          >
            <ToggleGroupItem value="light" aria-label="Light theme">
              <Sun className="h-4 w-4 mr-2" />
              Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark theme">
              <Moon className="h-4 w-4 mr-2" />
              Dark
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <Label>Accent Color</Label>
          <div className="flex flex-wrap gap-3">
            {accentColors.map((color) => (
              <Button
                key={color.name}
                variant="outline"
                size="icon"
                className={cn(
                  "h-8 w-8 rounded-full transition-all duration-200",
                  selectedColor.name === color.name && "ring-2 ring-offset-2 ring-ring"
                )}
                onClick={() => handleColorChange(color)}
                aria-label={`Select ${color.name} accent color`}
              >
                <span className={cn("h-full w-full rounded-full", color.class)} />
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeCustomizer;