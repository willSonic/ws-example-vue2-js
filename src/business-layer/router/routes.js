import Home from "../../view-layer/pages/home";
import  StyleCollection from "../../view-layer/pages/stylecollection";
import NotFound from "../../view-layer/pages/not-found";

const routes = [
  {
    path: "/",
    name: " ",
    component: Home
  },
  {
    path: "/stylecollection",
    component: StyleCollection,
    props: route => ({
      query: { location: route.query.location, query: route.query.query }
    })
  },
  // {
  //   path: "/venues/detail",
  //   component: VenueDetail,
  //   props: route => ({
  //     query: { id: route.query.id }
  //   })
  // },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
