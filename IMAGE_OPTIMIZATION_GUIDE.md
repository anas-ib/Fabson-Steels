# Image Optimization Guide

## Current Issue

- **Total image size**: ~3,950 KB (3.9 MB)
- **Problem**: One image is 2272x1707 pixels but displayed at only 744x496
- **Need**: Modern formats (WebP/AVIF) or better compression

## Images That Need Optimization

### Gallery Images:
1. `modern_minimalistic__b4ca4779.jpg` - Used in Gallery
2. `stainless_steel_modu_5ffa047b.jpg` - Used in Gallery  
3. `industrial_heavy_dut_8194e77a.jpg` - Used in Gallery
4. `modern_steel_stairca_1b580cf9.jpg` - Used in Gallery

### Service Images:
5. `steelgate.jpg` - Used in Services & Steel Gates page
6. `kitchen.jpg` - Used in Services & Kitchen Steel page
7. `racks.jpg` - Used in Services & Staircases page
8. `customfabrication.png` - Used in Services & Industrial Fabrication page

### Other:
9. `opengraph.jpg` - Used for social media sharing

## Optimization Steps

### Step 1: Determine Required Dimensions

#### Gallery Images (aspect-square, 3 columns on desktop)
- **Mobile**: ~400px width (1 column)
- **Desktop**: ~400px width (3 columns)
- **Max needed**: 800px width (for retina displays)

#### Service Images (aspect-[4/3])
- **Mobile**: ~400px width
- **Desktop**: ~500px width  
- **Max needed**: 1000px width (for retina)

#### Service Page Hero Images (aspect-[16/9])
- **Mobile**: ~800px width
- **Desktop**: ~1200px width
- **Max needed**: 2400px width (for retina)

### Step 2: Compress & Resize Images

#### Recommended Tools:

**Option 1: Online Tools (Free)**
- **Squoosh.app** (Google) - Best for WebP conversion
- **TinyPNG.com** - Good compression
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

**Option 2: Command Line (Recommended)**
```bash
# Using ImageMagick
magick input.jpg -resize 800x600 -quality 85 -format webp output.webp

# Using Sharp (Node.js)
npx sharp-cli -i input.jpg -o output.webp --webp --quality 85 --resize 800
```

### Step 3: Target Dimensions & Formats

#### Gallery Images (3 columns, square):
- **Format**: WebP
- **Dimensions**: 800x800px (for 2x retina)
- **Quality**: 80-85%
- **Target size**: <150 KB each

#### Service Card Images (4 columns, 4:3):
- **Format**: WebP  
- **Dimensions**: 1000x750px (for 2x retina)
- **Quality**: 80-85%
- **Target size**: <200 KB each

#### Service Page Hero Images (16:9):
- **Format**: WebP
- **Dimensions**: 2400x1350px (for 2x retina) 
- **Quality**: 85%
- **Target size**: <400 KB each

#### OpenGraph Image:
- **Format**: JPEG (for compatibility)
- **Dimensions**: 1200x630px (Facebook/LinkedIn standard)
- **Quality**: 85%
- **Target size**: <100 KB

### Step 4: Create Responsive Images

For images that display at different sizes, create multiple versions:

**Example for Gallery:**
- `image-400.webp` (400x400) - Mobile
- `image-800.webp` (800x800) - Desktop & Retina

### Step 5: Quick Win - Compress Existing Images

Even without resizing, just compressing existing images can save 50-70%:

```bash
# Using Squoosh CLI (if you have Node.js)
npx @squoosh/cli --webp quality=85 input.jpg

# Or use online tool: https://squoosh.app
```

## Expected Results

### Before:
- Total: ~3,950 KB (3.9 MB)
- Largest image: ~500-800 KB each
- Format: JPEG/PNG

### After:
- Total: ~800-1200 KB (0.8-1.2 MB) 
- Largest image: ~200-400 KB each
- Format: WebP
- **Savings**: ~2.7-3.1 MB (70-80% reduction)

## Implementation Checklist

- [ ] Compress all images to WebP format
- [ ] Resize images to appropriate dimensions
- [ ] Update image imports in code
- [ ] Add `loading="lazy"` to images (already done in code updates)
- [ ] Add `width` and `height` attributes to prevent layout shift
- [ ] Use responsive images with `srcset` for critical images
- [ ] Optimize opengraph.jpg to proper size (1200x630)

## Recommended Image Optimization Workflow

1. **Use Squoosh.app** - Upload each image
2. **Select WebP format** - 80-85% quality
3. **Resize to target dimensions** (see Step 3)
4. **Compare file size** - Should be 70-80% smaller
5. **Replace original** with optimized version
6. **Update code** - Change .jpg/.png to .webp in imports

## Quick Command (if you have ImageMagick installed)

```bash
# Batch convert all JPGs in stock_images folder
cd attached_assets/stock_images
for file in *.jpg; do
  magick "$file" -resize 800x800 -quality 85 "${file%.jpg}.webp"
done
```

## Fallback Support

If you want to support older browsers, use picture element with fallback:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="description">
</picture>
```

But for modern websites (2024), WebP is supported by 97%+ browsers, so direct .webp is fine.

