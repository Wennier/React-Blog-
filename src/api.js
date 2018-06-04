
let api = {};
let privolApi = 'http://localhost:4000/api';

api.getArticleList = privolApi + '/article_list';
api.getTagsList = privolApi + '/tags_list';
api.addTagName = privolApi + '/tags_list/add';
api.deleteTagName = privolApi + '/tags_list/delete';
api.getArticleDetail = privolApi + '/article_list';

api.addArticle = privolApi + '/add/article';
api.getUserInfo = privolApi + '/user/sign_in';
api.userSignUp = privolApi + '/user/sign_up';


export default api;

