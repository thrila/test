import { useQuery } from "@tanstack/react-query"

const Auto = () => {
  const { data }: any = useQuery({
    queryFn: () => { fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete') },
    queryKey: ['items'],
  })

  return (
    <div>
      {
        data.map((item) => {
          return
        })
      }
    </div>
  )
}

export default Auto
