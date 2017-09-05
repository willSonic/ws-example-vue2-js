/**
 * Created by willstreeter on 9/4/17.
 */
import axios from "axios";

const apiRoot = `http://api.shopstyle.com/api/v2/products?pid=uid5225-39800235-6&fts=`;
const apiContext = `&offset=0&limit=50`;

export async function fetchStyleCollective(type) {
  const response = await axios.get( `${apiRoot + type + apiContext}` );
  return response;
}