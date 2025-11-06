---
permalink: /
title: ""
author_profile: true
collection: "nav"
---
<img src="/files/gallery/0_Banner.png" alt="some cool pic" style="max-width:100%; height:auto;">

We study how glial cells and their networks keep the brain healthy—and what happens when these systems break down in development, aging, and inflammation. Right now, we are investigating how white matter dynamics shape glial function in preclinical models of multiple sclerosis. Combining neuroimaging, digital histopathology, and spatial omics, and to perform cross-species comparisons, we aim to uncover the mechanisms that drive myelin damage and repair, paving the way for better diagnosis and treatment of brain disorders.




<h2>Art of Science</h2>

<div class="my-gallery">

  <a href="files/gallery/3_NINDS3.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="A starry beach within — the marmoset hippocampus, where astrocytes (gold) shimmer like stars over a sandy shore, and myelin waves (blue) ripple through the sea of memory.">
    <img src="files/gallery/3_NINDS3.png" alt="A starry beach within — the marmoset hippocampus, where astrocytes (gold) shimmer like stars over a sandy shore, and myelin waves (blue) ripple through the sea of memory.">
  </a>
  
  <a href="files/gallery/4_NINDS4.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="caption">
    <img src="files/gallery/4_NINDS4.png" alt="A universe of renewal — In the marmoset optic nerve, lysosomes swirl like dying stars, breaking down remnants to clear the old for new.">
  </a>
  
  
  <a href="files/gallery/1_NINDS.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="caption">
    <img src="files/gallery/1_NINDS.png" 
         alt="An ancient Chinese character meets American pop art, by way of single cells — A 13th-century BC oracle bone script of a pig (upper left) gradually transformed into the modern Chinese pictogram 豕 (shǐ) (bottom right), a homonym of “history.” Strikingly, its form echoes a contemporary portrait of 250,000 marmoset neurons (bottom left), mapped by single-nucleus RNA sequencing and distilled through a dimension-reduction algorithm (UMAP). Across millennia, language and biology converge in a shared visual rhyme — from oracle bones to single cells..
">
  </a>

  <a href="files/gallery/2_NINDS2.png" 
     data-pswp-width="820" 
     data-pswp-height="447" 
     data-caption="caption">
    <img src="files/gallery/2_NINDS2.png" alt="Marmoset brain with multiple sclerosis–like lesions in the white matter, visualized by RNA abundance (left) and RNA similarity (right). The mirrored pattern resembles the face of a wild boar, where the lesions appear as eyes, the caudate as the nose, and the hippocampus as the mouth.">
  </a>
  
  <a href="files/gallery/7_NINDS7.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="caption">
    <img src="files/gallery/7_NINDS7.png" alt="">
  </a>
  <a href="files/gallery/5_NINDS5.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="caption">
    <img src="files/gallery/5_NINDS5.png" alt="Manuscripts of the cell — In cancer nuclei (blue), nuclear speckles (magenta) glow as scribes of pre-mRNA, drafting and redrafting the script of life.">
  </a>
 
  <a href="files/gallery/6_NINDS6.png" 
     data-pswp-width="800" 
     data-pswp-height="800" 
     data-caption="caption">
    <img src="files/gallery/6_NINDS6.png" alt="Astrocytes flare in gold around inflammed blood vessels, resembling meteors carving paths across a starry night sky of nuclei.">
  </a>
  

  
</div>



<!-- PhotoSwipe v5 core + lightbox -->
<link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css">
<link rel="stylesheet" href="https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css">

<!-- UMD version for compatibility with GitHub Pages -->
<script src="https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.umd.min.js"></script>
<script src="https://unpkg.com/photoswipe@5/dist/photoswipe.umd.min.js"></script>
<script src="https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.umd.min.js"></script>

<script>
  // Use the global PhotoSwipeLightbox and PhotoSwipeDynamicCaption from UMD builds
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.my-gallery',
    children: 'a',
    pswpModule: PhotoSwipe
  });

  new PhotoSwipeDynamicCaption(lightbox, {
    type: 'auto',
    captionContent: (slide) => slide.data.caption || slide.data.alt
  });

  lightbox.init();
</script>


<h2> 
	gLINa Lab footprints ...
		<i class="fa-solid fa-shoe-prints">...</i>

</h2>



<iframe 
  src="/footprint/map.html" 
  style="border:none; width:100%; height:600px;">
</iframe>


