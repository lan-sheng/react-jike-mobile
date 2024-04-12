import { Tabs } from 'antd-mobile'
import './style.css'
import { useEffect, useState } from 'react'
import { fetchChannelApi, type ChannelItem } from '@/apis/list'
const Home = () => {
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
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channels.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              123
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
export default Home
