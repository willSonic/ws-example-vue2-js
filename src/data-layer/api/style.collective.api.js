/**
 * Created by willstreeter on 9/4/17.
 */
import axios from "axios";

const apiRoot = `http://api.shopstyle.com/api/v2/products?pid=uid5225-39800235-6&fts=`;

async function fetchStyleCollective(type, offset) {
	console.log('fetching------ type ', type)
	const apiContext = `&offset=${offset}&limit=50`;
  const response = await axios.get( `${apiRoot + type + apiContext}` );
  return response;
}



export default fetchStyleCollective;
