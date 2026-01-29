import { TextEncoder, TextDecoder } from 'node:util'
import { mockFetch } from '../mocks/fetch'

global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder
global.fetch = mockFetch as jest.Mock
