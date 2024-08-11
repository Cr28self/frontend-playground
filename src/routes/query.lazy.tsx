import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/query')({
  component: QueryPage
})

function QueryPage{

}