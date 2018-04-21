const tooltip = (element) => {

  // Images container
  const container = document.getElementById(element),
        // Images
        images = [...container.getElementsByTagName('img')]; // Transform to Obj

  for (let img in images) {
    // Re-write image content to create tooltip container and the tooltip itself
    images[img].outerHTML = `<span class='t-c'>
                            ${images[img].outerHTML}
                            <i class='t'>
                              <span>${images[img].getAttribute('alt')}</span>
                            </i>
                            </span>`;
  }
};

tooltip('container');
