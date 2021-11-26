<template>
  <Header />
  <div>
    <h1>Reguleque Search</h1>
    <ais-instant-search
      :search-client="searchClient"
      index-name="revenue_entry"
    >
      <div class="left-panel">
        <ais-clear-refinements />
        <h2>Organismo</h2>
        <ais-refinement-list attribute="nombre_organismo" searchable />
        <ais-configure :hitsPerPage="8" />
      </div>
      <div class="right-panel">
        <ais-search-box />
        <ais-hits>
          <template v-slot:item="{ item }">
            <h2>{{ item.nombre }}</h2>
          </template>
        </ais-hits>
        <ais-pagination />
      </div>
    </ais-instant-search>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import algoliasearch from "algoliasearch/lite";
import { history as historyRouter } from "instantsearch.js/es/lib/routers";
import { simple as simpleMapping } from "instantsearch.js/es/lib/stateMappings";

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "7H4w7Z28OCCZUhywxqow3EdDKXTRXkNK", // Public search-only key
    /* apiKey: "asd", */
    nodes: [
      {
        host: "api-direct.reguleque.cl",
        /* host: "172.15.0.20", */
        port: "443",
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  additionalSearchParameters: {
    queryBy: "nombre,nombre_organismo,tipo_cargo",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      searchClient,
      searchClient2: algoliasearch(
        "latency",
        "7H4w7Z28OCCZUhywxqow3EdDKXTRXkNK"
      ),
      routing: {
        router: historyRouter(),
        stateMapping: simpleMapping(),
      },
    };
  },
};
</script>

<style lang="sass">
root
    --main-color: #077a16
    --main-hover-color: #059e19



body
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"


.main-container h2
    font-size: 24px
    margin-bottom: 10px


.main-container .panel-block
    margin-bottom: 25px


.panel-block
    max-width: 220px

.panel-block .ais-SearchBox-input
    font-size: 14px
    /* margin-top: 5px */
    /* margin-bottom: 5px */


.ais-RefinementList-showMore, .ais-RefinementList-showMore--disabled
    margin-top: 12px


.ais-Pagination
    margin-top: 1em

.left-panel
    float: left
    width: 250px

.right-panel
    margin-left: 260px
.nav-custom
    width: 100%
    display: flex
    align-items: center
    min-height: 50px
    padding: 0.5rem 1rem
    margin-bottom: 1rem
    background-image: linear-gradient(284deg, #94ca02, #088d1b)
    color: #fff


.header a
    color: #fff
    text-decoration: none


.header-title
    font-size: 1.2rem
    font-family: "Poppins", Helvetica, Arial, Lucida, sans-serif
    font-weight: 900
    font-style: italic
    text-transform: uppercase
    padding-top: 10px


.header-subtitle
    font-size: 1.2rem


.main-container
    align-items: center
    max-width: 1200px
    margin: 0 auto
    padding: 1rem


.ais-Highlight-highlighted
    color: inherit
    font-size: inherit


#searchbox
    margin-bottom: 2rem


.query-results
    margin: unset
    display: grid
    grid-auto-rows: 1fr
    grid-template-columns: repeat(3, 1fr)


@media (max-width: 975px)
    .query-results
        grid-template-columns: repeat(2, 1fr)



@media (max-width: 650px)
    .query-results
        grid-template-columns: 1fr



.query-result-item
    list-style-type: none
    border: solid #1c351723 2px
    border-radius: 5px
    box-shadow: 0 0 5px 0 #365c2d44
    display: flex
    flex-direction: column
    margin: unset
    margin: 10px 8px
    padding: 20px 15px
    min-height: 390px
    height: max-content
    width: unset


.hit-name
    font-size: 1.2em
    /* font-weight: 700 */
    margin-top: 0


.hit-info
    text-align: left
    margin-bottom: 18px


.hit-fecha
    text-decoration: none


.hit-body-key
    font-weight: 600


.hit-contract
    /* display: flex */
    margin-bottom: 15px


.hit-contract > *
    flex-grow: 1


.hit-button-container
    margin-top: auto
    text-align: right


.hit-show-more
    background: var(--main-color)
    color: #fff
    border: none
    padding: 6px 10px
    border-radius: 5px
    flex-grow: 50
    font-weight: bold


.hit-show-more:hover
    background: var(--main-hover-color)
    transition-duration: 0.2s
    cursor: pointer


.hit-modal-date
    text-align: center
    margin-bottom: 0px
    color: black



.ais-RefinementList-showMore
    background: var(--main-color)


.ais-RefinementList-showMore:hover
    background: var(--main-hover-color)


.ais-Pagination-item--selected .ais-Pagination-link
    background-color: var(--main-color)
    border-color: var(--main-color)
    color: white


.ais-Pagination-link
    color: var(--main-color)


#hits-per-page
    margin-top: 15px

*
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  -ms-box-sizing: border-box
  box-sizing: border-box


html
  margin: 0
  padding: 0
  font-size: 16px
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  height: 100%

main
  display: flex


aside,
section
  padding: 10px


section
  width: 100%


.thank-you
  font-size: 12px
  text-align: center
  margin-top: 20px

.ais-Panel
  margin-top: 20px

.section-header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

.sort-by
  display: flex
  align-items: center

.sort-by label
  margin-right: 5px

footer
  margin-top: 25px

.no-results
  text-align: center
</style>
