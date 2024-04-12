import { http } from "@/utils"

import type { ResType } from "./shared"

export type ChannelItem = {
  id: number
  name: string
}

type ChannelRes = {
  channels: ChannelItem[]
}

export function fetchChannelApi() {
  return http.request<ResType<ChannelRes>>({ url: "/channels" })
}
