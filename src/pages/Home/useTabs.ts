import { useEffect, useState } from 'react'
import { fetchChannelApi, type ChannelItem } from '@/apis/list'
function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelApi()
        console.log('res.data.data.channels: ', res.data.data.channels)
        setChannels(res.data.data.channels)
      } catch (error) {
        throw new Error('获取频道失败')
      }
    }
    getChannels()
  }, [])
  return channels
}
export default useTabs