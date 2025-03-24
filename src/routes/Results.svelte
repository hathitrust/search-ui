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
                <a class="list-group-item list-group-item-action w-sm-50" href="#fullview">full view</a>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
