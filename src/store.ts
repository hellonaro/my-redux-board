import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state: any, action: any) => {
    if (state === undefined) {
        const newState = {
            selected_category: "산",
            categories: [{
                name: "산",
                contents: [
                    "https://t1.daumcdn.net/cfile/blog/997C273A5AA64D8E0F",
                    "https://i.gr-tn.co.kr/healthmedia/public/upload/news_editor/Ajb1W2er1pz9berLdtH94uSOufZR5IVlCezLQkq8.jpeg",
                    "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/Qb0/image/FAgR0jeVl0U42A8o0yHCVT2ZX28.jpg",
                ]
            },
            {
                name: "영화",
                contents: [
                    "https://upload.wikimedia.org/wikipedia/ko/thumb/7/75/%EB%AF%B8%EC%9D%B4%EB%9D%BC1999_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%9D%B4%EB%9D%BC1999_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
                ]
            }]
        }
        return newState;
    }
    let newState: object = {}
    if (action.type === 'SELECT') {
        newState = Object.assign({}, state, { selected_category: action.selected_category })
    }
    return newState
}

export default createStore(reducer, composeWithDevTools())