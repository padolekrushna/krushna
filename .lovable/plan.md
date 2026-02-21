
# Portfolio Enhancement Plan

## Summary of Changes

This update covers 5 areas: adding a new project, updating the About section, expanding Education, adding a certification, and improving the overall site appearance.

---

## 1. Add New Project: CNN-Based Brain MRI Tumor Classification

Add a new entry to `src/data/projects.ts`:
- **Title**: CNN-Based Brain MRI Tumor Classification
- **Domain**: Healthcare / Medical Imaging
- **Tech Stack**: Python, TensorFlow/Keras, CNN, Image Processing, Data Augmentation, Model Evaluation
- **Description and highlights** from your provided text
- Will appear in the "More Projects" grid (not featured)

---

## 2. About Section Updates (`src/components/AboutSection.tsx`)

- **Remove "Konverge.AI"** from the title -- change to just "AI/ML Engineer" without company name
- **Add "150M dollar project" feel** -- update the subtitle to something like "AI/ML Engineer | Driving Enterprise AI Solutions" and add a mention in the description about contributing to high-impact enterprise projects worth $150M+
- **Expand Education** to include:
  - B.Sc. Data Science -- Savitribai Phule Pune University (2022-2026) (existing)
  - 12th (HSC) -- Kendriya Vidyalaya VRDE, CBSE -- 73%
  - 10th (SSC) -- Kendriya Vidyalaya VRDE, CBSE -- 82%

---

## 3. Add Microsoft AZ-900 Certification (`src/components/SkillsSection.tsx`)

Add "Microsoft Azure Fundamentals (AZ-900)" to the certifications grid alongside the existing three, making it 4 certifications total.

---

## 4. Visual & Appearance Improvements

Enhance the site to feel more advanced and premium:

- **`src/index.css`**: Add new CSS utilities -- animated gradient mesh background, text shimmer effect for headings, particle grid pattern, subtle noise texture overlay
- **`src/components/AboutSection.tsx`**: Add animated gradient border around the profile image section, add a subtle text reveal animation
- **`src/components/SkillsSection.tsx`**: Add hover glow effects on skill category cards, animate skill tags with staggered entrance
- **`src/components/ProjectsSection.tsx`**: Add subtle animated accent lines and improved card hover states with gradient borders
- **`src/components/HeroSection.tsx`**: Add a subtle animated gradient mesh behind the text, improve the status badge with a pulsing ring effect
- **`src/components/Navigation.tsx`**: Add a frosted glass depth effect when scrolled

---

## Technical Details

### Files Modified:
1. **`src/data/projects.ts`** -- Add brain MRI project object
2. **`src/components/AboutSection.tsx`** -- Remove Konverge.AI, add education entries, update subtitle, add $150M enterprise project mention
3. **`src/components/SkillsSection.tsx`** -- Add AZ-900 certification card
4. **`src/index.css`** -- Add shimmer text animation, improved glassmorphism, noise texture, animated gradient mesh utilities
5. **`src/components/HeroSection.tsx`** -- Enhanced badge animation, improved gradient effects
6. **`src/components/ProjectsSection.tsx`** -- Better card hover states with gradient borders
7. **`src/components/Navigation.tsx`** -- Enhanced scroll state styling

### No new dependencies required -- all improvements use existing Framer Motion, Tailwind, and CSS capabilities.
