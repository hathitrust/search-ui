<script>
  let { data, icon } = $props();

  //   if (key === 'fulltext') {
  //     icon = 'fa-regular fa-file-lines';
  //   } else if (key === 'limited') {
  //     icon = 'fa-solid fa-lock';
  //   } else {
  //     icon = 'fa-solid fa-unlock keyhole';
  //   }
  function onclick(event) {
    // event.preventDefault();
    // event.stopPropogation();

    // let isExpanded = !(button.getAttribute('aria-expanded') == 'true')
    console.log('clicked this!', event.target.closest('.filter-list'));
  }
</script>

<aside class="twocol-side" id="sidebar">
  <button id="action-toggle-filters" class="btn btn-outline-primary" aria-expanded="false">
    <span
      ><span class="not-expanded">Show</span><span class="is-expanded">Hide</span>
      Search Filters
    </span>
  </button>
  <h2 class="filters-heading fs-3 mt-3">Filter your search</h2>
  <div class="accordion mb-1">
    <div class="panel accordion-item">
      <h3 class="accordion-header" id="heading-current">
        <button
          class="accordion-button fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-current"
          aria-controls="collapse-current"
          aria-expanded="true">Current Filters</button
        >
      </h3>
      <div id="collapse-current" class="accordion-collapse collapse show" aria-labelledby="heading-current">
        <div class="accordion-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center gap-3">
              <span class="d-inline-flex align-items-center gap-2"
                >Full Text &amp; All Fields: <span class="query-term">elephant</span></span
              >
              <a class="btn btn-outline-dark btn-lg" href="/cgi/ls?a=srchls;q1=*;lmt=all">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                <span class="visually-hidden"
                  >Remove filter
                  <span>Full Text &amp; All Fields: elephant</span></span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion mb-3">
    <div class="panel accordion-item">
      <h3 class="accordion-header" id="heading-viewability">
        <button
          class="accordion-button fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-viewability"
          aria-controls="collapse-viewability"
          aria-expanded="true">Item Viewability</button
        >
      </h3>
      <div id="collapse-viewability" class="accordion-collapse collapse show" aria-labelledby="heading-viewability">
        <div class="accordion-body">
          <div class="list-group list-group-flush">
            <a
              href="http://localhost:8080/cgi/ls?q1=elephant;field1=ocr;a=srchls;lmt=all"
              class="list-group-item d-flex justify-content-between align-items-center active"
              aria-current="true"
              >All Items<span class="badge bg-dark rounded-pill"
                >{data.results.item_viewability.all.toLocaleString('en-US')}</span
              ></a
            >
            <a
              href="http://localhost:8080/cgi/ls?q1=elephant;field1=ocr;a=srchls;lmt=ft"
              class="list-group-item d-flex justify-content-between align-items-center"
              >Full View<span class="badge bg-dark rounded-pill"
                >{data.results.item_viewability.fullview.toLocaleString('en-US')}</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion" id="accordion-filters">
    {#each data.results.search_facets as facet, i}
      <div class="panel accordion-item">
        <h3 class="accordion-header" id="heading-{i}">
          <button
            class="accordion-button fw-bold collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-{i}"
            aria-controls="collapse-{i}"
            aria-expanded="false">{facet.name}</button
          >
        </h3>
        <div
          id="collapse-{i}"
          class="accordion-collapse collapse"
          aria-labelledby="heading-{i}"
          data-bs-parent="#accordion-filters"
          style=""
        >
          <div class="accordion-body">
            <div class="filter-list" data-expanded="false">
              {#each facet.values as filter}
                <div
                  class="filter-list-item d-flex flex-nowrap align-items-center justify-content-between gap-3 mb-2 px-3"
                >
                  <a href="#filter">{filter.name}</a>
                  <span>{filter.count}</span>
                </div>
              {/each}
            </div>
            {#if facet.values.length > 10}
              <div class="mt-3">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-dark"
                  data-action="expand-filter"
                  aria-expanded="false"
                  {onclick}
                >
                  <span>
                    Show
                    <span class="not-expanded"> all {facet.values.length} </span><span class="is-expanded">
                      fewer
                    </span>
                    {facet.name} Filters</span
                  >
                </button>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</aside>
<section class="twocol-main" id="section">
  <div class="mainplain w-auto position-relative">
    <div class="results-container">
      <h1>Search results</h1>

      {#each data.results.search_results as result, i}
        <article class="record d-flex gap-3 p-3 mb-3 mt-3 shadow-sm">
          <div class="cover d-none d-md-block" data-hdl={result.itemID}>
            <img
              loading="lazy"
              class="bookCover border p-1 flex-grow-0 flex-shrink-0"
              aria-hidden="true"
              alt=""
              src="http://localhost:8080/cgi/imgsrv/cover?id={result.itemID};width=250"
            />
          </div>
          <div class="flex-grow-1 d-flex flex-column justify-content-between">
            <div class="container-fluid p-1">
              <h3 class="record-title" id="maintitle-{i + 1}">{result.title}</h3>
              <div class="grid">
                <dt class="g-col-lg-4 g-col-12">Published</dt>
                <dd class="g-col-lg-8 g-col-12">{result.date}</dd>
              </div>
              <div class="grid">
                <dt class="g-col-lg-4 g-col-12">Author</dt>
                <dd class="g-col-lg-8 g-col-12">{result.author[0]}</dd>
              </div>
            </div>
            <div class="resource-access-container" data-key={result.key}>
              <div class="list-group list-group-horizontal-sm align-items-center">
                <a
                  class="list-group-item list-group-item-action w-sm-50"
                  href="http://catalog.hathitrust.org/Record/{result.itemID}"
                  ><i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>Catalog Record</span></a
                >
                <a class="list-group-item list-group-item-action w-sm-50" href="#access"
                  ><i class="fa-regular fa-file-lines" aira-hidden="true"></i>{result.key}</a
                >
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- {#snippet accessType(key)}
  <i class:icon aria-hidden="true"></i>
{/snippet} -->
