import request from "../services"

export const GetData = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
            request
              .get(url)
              .then((res) => setData(res))
              .then(() => setLoading(false))
              .cath((err) => setError(err));
    }, [url])
    return [data,loading,error]
}