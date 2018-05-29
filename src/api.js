
let api = {};
let privolApi = 'http://localhost:4000/api';

api.getArticleList = privolApi + '/article_list';
api.getTagsList = privolApi + '/tags_list';
api.getArticleDetail = privolApi + '/article_list';
api.getUserInfo = privolApi + '/user/sign_in';

export default api;

