import{cW as e,cP as t,cQ as i,cR as r}from"./5e6457ca-37ac-4059-bb84-3fa950bbdb45.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=o,c=function(e,t,i,r){var o,c=arguments.length,l=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(c<3?o(l):c>3?o(t,i,l):o(t,i))||l);return c>3&&l&&Object.defineProperty(t,i,l),l}([r("w3m-transactions-view")],c);export{c as W3mTransactionsView};
