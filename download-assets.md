# Download Assets from Google Drive

## Quick Download Links

Since the Google Drive folder is shared, you can download individual files using these steps:

### Step 1: Access the Google Drive Folder
Open: https://drive.google.com/drive/folders/11bKBEmKPnk3CEuGB_L2DuuQSOJrmDiMo

### Step 2: Download All Files
1. **Select All Files**: Press `Ctrl+A` (Windows) or `Cmd+A` (Mac)
2. **Download**: Right-click and select "Download"
3. **Extract**: Unzip the downloaded file

### Step 3: Organize Files

Move the downloaded files to the correct folders:

#### Videos (move to `src/assets/videos/`):
- `caraousel switch.mp4` → rename to `carousel-switch.mp4`
- `parallax animation.mp4` → rename to `parallax-animation.mp4`
- `ripple effect.mp4` → rename to `ripple-effect.mp4`
- `scroll and pop up.mp4` → rename to `scroll-and-popup.mp4`
- `customer-section.mp4` → keep as is
- `features-services.mp4` → keep as is
- `homepage.mp4` → keep as is
- `loader.mp4` → keep as is
- `showcase work.mp4` → rename to `showcase-work.mp4`
- `striking - any simple object can be used.mp4` → rename to `striking-any-simple-object.mp4`
- `testimonials.mp4` → keep as is

#### Images (move to `src/assets/images/`):
- `cards.png` → keep as is
- `stats.png` → keep as is
- `graph.png` → keep as is

### Step 4: File Naming Convention
Make sure to rename files to match the expected names (remove spaces, use hyphens):

**Original** → **Renamed**
- `caraousel switch.mp4` → `carousel-switch.mp4`
- `parallax animation.mp4` → `parallax-animation.mp4`
- `ripple effect.mp4` → `ripple-effect.mp4`
- `scroll and pop up.mp4` → `scroll-and-popup.mp4`
- `showcase work.mp4` → `showcase-work.mp4`
- `striking - any simple object can be used.mp4` → `striking-any-simple-object.mp4`

### Step 5: Verify File Structure
After organizing, your structure should be:

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
│   └── images/
│       ├── cards.png
│       ├── stats.png
│       └── graph.png
```

### Step 6: Test the Application
After adding the assets:
1. Run `npm run dev`
2. Check if videos and images load correctly
3. Open browser console to check for any errors

### Troubleshooting
- If files don't load, check the file names match exactly
- Ensure files are in the correct directories
- Check file sizes (videos should be under 50MB for web)
- Verify file formats (MP4 for videos, PNG/JPG for images)

### Alternative: Individual Download
If bulk download doesn't work:
1. Click each file individually
2. Click the download button (↓) in the top toolbar
3. Save to the appropriate folder

Your Shreyash landing page will then display all your custom assets!
