import { Box, Container } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import { DEFAULT_SEARCH_TERM, SEARCH_SUGGEST_NUMBER } from '../app/constants'
import { useAppSelector } from '../app/hooks/hooks'
import CardList from '../components/equipment-card-list'
import { Search } from '../components/search/search'
import { useFetchEquipmentsBySearchTermQuery } from '../store/equipments-api'
import { selectAccount } from '../store/selectors'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const term = searchParams.get('term')

  const { login } = useAppSelector(selectAccount)
  const arg = { login, searchTerm: term || DEFAULT_SEARCH_TERM }

  const { isFetching, isError, data: equipmentList } = useFetchEquipmentsBySearchTermQuery(arg)

  const suggestList = equipmentList?.slice(0, SEARCH_SUGGEST_NUMBER)

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Search list={suggestList} isLoading={isFetching} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          columnGap: '20px',
        }}
      >
        <CardList list={equipmentList} isLoading={isFetching} isError={isError} />
      </Box>
    </Container>
  )
}
