
import axios from "axios";
import { useState,useEffect } from "react";
import "./ytSearch.scss";
import moment from "moment";


const YoutubeSearch = () => {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, [])

    const handleSearchYoutube = async() => {
        // let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part:'snippet',
        //     maxResults:20,
        //     key:'AIzaSyA4Dzk3Rlv23f505NH_6zBdzHGfH8lKe0w',
        //     type:'video',
        //     q:query
        // })
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params":{
                'part':'snippet',
                'maxResults':'20',
                'key':'AIzaSyA4Dzk3Rlv23f505NH_6zBdzHGfH8lKe0w',
               'type':'video',
                'q':query
            }
        })
        console.log('check', res)
        if(res &&res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if(raw && raw.length > 0) {
                
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createAt = item.id.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }

            setVideos(result)
        }
    }

    return(
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder="Search" value={query}
                    onChange={(event) => setQuery(event.target.value)}
                ></input>
                <button onClick={handleSearchYoutube}>Search</button>
            </div>

            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                                <iframe className="ifram-yt"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>

                                </iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="created-at">
                                    Created at: { moment(item.createAt).format('DD-MM-YYY HH:mm:ss')}
                                </div>
                                <div className="author">
                                    Arthur:{item.author}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                
                        </div> 
                    )
                })

            } 
        </div>
    )
}
export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "nm3LMVsqtl0e_LytT1uAWYo2pHg",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 302099,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "IFnAlX9oXHXOHMGd7rhVi5YtXd4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "zjUC_W7IOIc"
//         },
//         "snippet": {
//           "publishedAt": "2020-04-05T01:30:02Z",
//           "channelId": "UCG2ovypNCpVOTFeY1YCocmQ",
//           "title": "React hooks: 06 - Những điều cần biết về useEffect hooks 🎉",
//           "description": "Side effects là gì? Có bao nhiêu loại? Và useEffect hooks được sử dụng trong functional component như thế nào? Đây là một ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/zjUC_W7IOIc/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/zjUC_W7IOIc/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/zjUC_W7IOIc/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Easy Frontend",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-04-05T01:30:02Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kpYEbY-O6to178o9PI4G8PSVcVw",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "LlvBzyy-558"
//         },
//         "snippet": {
//           "publishedAt": "2021-08-02T14:00:16Z",
//           "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
//           "title": "React Hooks Course - All React Hooks Explained",
//           "description": "In this video I will teach you guys every single core hook from React! Code: https://github.com/machadop1407/react-hooks-course ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "PedroTech",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-08-02T14:00:16Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "vbGhKPdhFVmdmXtZKH1aCC0EZEw",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "TNhaISOUy6Q"
//         },
//         "snippet": {
//           "publishedAt": "2021-01-18T18:20:26Z",
//           "channelId": "UCsBjURrPoezykLs9EqgamOA",
//           "title": "10 React Hooks Explained // Plus Build your own from Scratch",
//           "description": "React hooks provide a highly-efficient was to tap into framework features and organize reactive logic. Learn how use every built-in ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Fireship",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-01-18T18:20:26Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "eYlI7smqycxfgDx_0J3LK4t6z5s",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "rIaFc5MLCcs"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-08T12:41:08Z",
//           "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
//           "title": "useState trong React hook | React hook 2021",
//           "description": "Trong video này chúng ta sẽ tìm hiểu về useState trong React hook nhé anh em useState là một hook trong React được sử ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/rIaFc5MLCcs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/rIaFc5MLCcs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/rIaFc5MLCcs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "F8 Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-08T12:41:08Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "KjokezAHjN0nTQdAbrCnurwVBYU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "O6P86uwfdR0"
//         },
//         "snippet": {
//           "publishedAt": "2020-05-05T16:00:11Z",
//           "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
//           "title": "Learn useState In 15 Minutes - React Hooks Explained",
//           "description": "IMPORTANT: Full React Course: https://courses.webdevsimplified.com/learn-react-today In this video I cover everything you need ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/O6P86uwfdR0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/O6P86uwfdR0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/O6P86uwfdR0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Web Dev Simplified",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-05-05T16:00:11Z"
//         }
//       }
//     ]
//   }
  