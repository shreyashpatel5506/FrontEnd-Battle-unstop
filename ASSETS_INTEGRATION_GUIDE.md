# Assets Integration Guide for Shreyash Landing Page

## Step 1: Download Assets from Google Drive

Download all assets from your Google Drive folder and organize them as follows:

### Video Assets (save to `src/assets/videos/`)
1. `homepage.mp4` - Main hero background video
2. `loader.mp4` - Loading screen animation
3. `parallax-animation.mp4` - Parallax scrolling effects
4. `carousel-switch.mp4` - Carousel transitions
5. `ripple-effect.mp4` - Interactive ripple animations
6. `scroll-and-popup.mp4` - Scroll-triggered animations
7. `customer-section.mp4` - Customer testimonials background
8. `showcase-work.mp4` - Portfolio showcase animations
9. `features-services.mp4` - Features section background
10. `testimonials.mp4` - Testimonials carousel
11. `striking-any-simple-object.mp4` - Object animations

### Image Assets (save to `src/assets/images/`)
1. `cards.png` - Feature cards design
2. `stats.png` - Statistics visualization
3. `graph.png` - Data graphs and charts

## Step 2: File Structure
After downloading, your assets folder should look like this:

```
src/
├── assets/
│   ├── videos/
│   │   ├── homepage.mp4
│   │   ├── loader.mp4
│   │   ├── parallax-animation.mp4
│   │   ├── carousel-switch.mp4
│   │   ├── ripple-effect.mp4
│   │   ├── scroll-and-popup.mp4
│   │   ├── customer-section.mp4
│   │   ├── showcase-work.mp4
│   │   ├── features-services.mp4
│   │   ├── testimonials.mp4
│   │   └── striking-any-simple-object.mp4
│   ├── images/
│   │   ├── cards.png
│   │   ├── stats.png
│   │   └── graph.png
│   └── index.js (already created)
```

## Step 3: Components Using Your Assets

### Already Updated Components:
1. **Hero Component** - Uses `homepage.mp4` as background
2. **Loader Component** - Uses `loader.mp4` for loading animation
3. **Stats Component** - Uses `stats.png` for statistics display

### Components to Update (after downloading assets):

#### Features Component
- Can use `cards.png` for card designs
- Can use `features-services.mp4` as background

#### Portfolio Component
- Can use `showcase-work.mp4` for portfolio animations
- Can use `carousel-switch.mp4` for project switching

#### Testimonials Component
- Can use `testimonials.mp4` as background
- Can use `customer-section.mp4` for customer highlights

## Step 4: How to Download from Google Drive

### Method 1: Individual Download
1. Open the Google Drive link
2. Right-click each file
3. Select "Download"
4. Save to appropriate folder

### Method 2: Bulk Download
1. Select all files (Ctrl+A)
2. Right-click and select "Download"
3. Extract the ZIP file
4. Move files to appropriate folders

## Step 5: Optimization Tips

### Video Optimization
- Compress videos for web (recommended: H.264, max 10MB)
- Use tools like HandBrake or FFmpeg
- Consider WebM format for better compression

### Image Optimization
- Compress PNG files using TinyPNG or similar
- Consider WebP format for better performance
- Use appropriate sizes (max 1920px width)

## Step 6: Testing

After adding assets:
1. Run `npm run dev` to test locally
2. Check browser console for any loading errors
3. Test on different devices and browsers
4. Verify video autoplay works (may be blocked on some browsers)

## Step 7: Fallback Strategy

The components are designed with fallbacks:
- If videos don't load, placeholder images are shown
- If images don't load, they're hidden gracefully
- All components work without assets (using gradients/colors)

## Step 8: Performance Considerations

### Lazy Loading
Videos and images are loaded as needed to improve performance.

### Preloading
Critical assets (like hero video) are preloaded for better UX.

### CDN Deployment
When deploying to Vercel, assets will be automatically optimized and served via CDN.

## Troubleshooting

### Videos Not Playing
- Check file format (MP4 recommended)
- Ensure files are in correct directory
- Check browser autoplay policies

### Images Not Loading
- Verify file paths in `src/assets/index.js`
- Check file extensions match exactly
- Ensure files are in correct directory

### Large File Sizes
- Compress videos to under 10MB each
- Use appropriate video codecs (H.264)
- Consider splitting large videos

## Next Steps

1. Download all assets from Google Drive
2. Place them in the correct folders
3. Test the application
4. Deploy to Vercel

Your Shreyash landing page will then have all the custom animations and visuals from your asset collection!
