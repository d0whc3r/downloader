import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import SettingsIcon from '@mui/icons-material/Settings'
import AppBar from '@mui/material/AppBar'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Tooltip from '@mui/material/Tooltip'
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useClipboard } from '@web/helpers/clipboard/useClipboard'
import { isUrl } from '@web/helpers/utils'

import {
  StyledIconButton,
  StyledOutlinedInput,
  StyledToolbar,
} from './Header.styles'

export function Header() {
  const { t } = useTranslation('header')
  const [clipboard] = useClipboard()
  const labelPlaceholder = `${t('search.placeholder')}`
  const [placeholder, setPlaceholder] = useState(labelPlaceholder)

  useEffect(() => {
    isUrl(clipboard).then((isValid) => {
      setPlaceholder(isValid ? clipboard : labelPlaceholder)
    })
  }, [clipboard, labelPlaceholder])

  return (
    <AppBar position="fixed">
      <Formik
        initialValues={{ url: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        validate={async (values) => {
          const validClipboard = await isUrl(clipboard)
          const validUrl = await isUrl(values.url)
          if (!values.url && !validClipboard) {
            return { url: `${t('validation.url.required')}` }
          } else if ((values.url && !validUrl) || !validClipboard) {
            return { url: `${t('validation.url.valid')}` }
          }

          return {}
        }}
        onSubmit={(values, { resetForm }) => {
          const url = values.url || clipboard
          console.log('submitted values', url)
          resetForm()
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <Form>
            <StyledToolbar $error={!!errors.url}>
              <FormControl fullWidth error={!!errors.url}>
                <Tooltip title={t('search.title')}>
                  <StyledOutlinedInput
                    value={values.url}
                    size="medium"
                    name="url"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    startAdornment={
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title={t('add.title')}>
                          <IconButton
                            aria-label={t('add.aria-label')}
                            onClick={() => handleSubmit()}
                            onMouseDown={(event) => event.preventDefault()}
                            edge="end"
                          >
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                    placeholder={placeholder}
                    aria-label={t('search.aria-label')}
                    aria-describedby="search-link-helper-text"
                  />
                </Tooltip>
                <FormHelperText id="search-link-helper-text">
                  {errors.url}
                </FormHelperText>
              </FormControl>
              <Tooltip title={t('configuration.label')}>
                <StyledIconButton
                  size="large"
                  aria-label={t('configuration.aria-label')}
                  color="inherit"
                >
                  <SettingsIcon />
                </StyledIconButton>
              </Tooltip>
            </StyledToolbar>
          </Form>
        )}
      </Formik>
    </AppBar>
  )
}
