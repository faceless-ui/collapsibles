export type Props = {
  disable?: boolean,
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  htmlElement?: string,
  htmlAttributes?: {
    id?: string,
    className?: string,
    style?: Record<string, unknown>,
    onClick?: () => void,
  },
}
