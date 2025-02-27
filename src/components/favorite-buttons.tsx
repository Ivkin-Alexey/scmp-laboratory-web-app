import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { routes } from '../app/constants'
import { useAppSelector } from '../app/hooks/hooks'
import type { EquipmentID } from '../models/equipments'
import {
  useAddFavoriteEquipmentMutation,
  useDeleteFavoriteEquipmentMutation,
} from '../store/equipments-api'
import { selectAccount } from '../store/selectors'

interface IFavoriteButtons {
  isFavorite?: boolean
  equipmentID: EquipmentID
}

export default function FavoriteButtons(props: IFavoriteButtons) {
  const { isFavorite = false, equipmentID } = props

  const [add] = useAddFavoriteEquipmentMutation()
  const [remove] = useDeleteFavoriteEquipmentMutation()
  const { isAuth, login } = useAppSelector(selectAccount)
  const navigate = useNavigate()

  return isFavorite ? (
    <IconButton
      edge="start"
      aria-label="comments"
      color="primary"
      onClick={() => {
        if (isAuth) {
          remove({ login, equipmentID })
        } else {
          navigate(routes.signIn)
        }
      }}
    >
      <StarRoundedIcon />
    </IconButton>
  ) : (
    <IconButton
      edge="start"
      aria-label="comments"
      color="primary"
      onClick={() => {
        if (isAuth) {
          add({ login, equipmentID })
        } else {
          navigate(routes.signIn)
        }
      }}
    >
      <StarBorderRoundedIcon />
    </IconButton>
  )
}
