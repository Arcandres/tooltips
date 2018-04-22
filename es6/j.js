const tooltip = (e,a) => {

  // Images container
  const container = document.getElementById(e),
        // Images
        images = [...container.getElementsByTagName('img')]; // Transform to Obj

  for (let img in images) {
    // Re-write image content to create tooltip container and the tooltip itself
    images[img].outerHTML = `<span class='t-c'>
                            ${images[img].outerHTML}
                            <i class='t'>
                              <span>${images[img].getAttribute(a)}</span>
                            </i>
                            </span>`;
  }
};
