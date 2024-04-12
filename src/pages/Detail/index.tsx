import { DetailDataType, fetchDetailAPI } from '@/apis/detail'
import { NavBar } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
const Detail = () => {
  const [detailData, setDetailData] = useState<DetailDataType | null>(null)
  const [params] = useSearchParams()
  const id = params.get('id')
  useEffect(() => {
    const getDetail = async () => {
      const res = await fetchDetailAPI(id!)
      setDetailData(res.data.data)
    }
    getDetail()
  }, [id])

  const back = () => {
    window.history.go(-1)
  }
  if (detailData) {
    return (
      <div>
        <NavBar onBack={back}>{detailData?.title}</NavBar>
        <div dangerouslySetInnerHTML={{ __html: detailData?.content }}></div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}

export default Detail
