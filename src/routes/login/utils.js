export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}


export function matchNameToTerm(existing, value) {
  return (
    existing.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function sortName(a, b, value) {
  const aLower = a.name.toLowerCase()
  const bLower = b.name.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}

export function fakeRequest(value, cb) {
  return setTimeout(cb, 500, value ?
    getExistingName().filter(state => matchNameToTerm(state, value)) :
    getExistingName()
  )
}

export function getExistingName() {
  return [
   { name : 'Aaren'}
    ,
   { name : 'Aarika'}
    ,
   { name : 'Abagael'}
    ,
   { name : 'Abagail'}
    ,
   { name : 'Asia'}
    ,
   { name : 'Astra'}
    ,
   { name : 'Astrid'}
    ,
   { name : 'Astrix'}
    ,
   { name : 'Audrie'}
    ,
   { name : 'Audry'}
    ,
   { name : 'Audrye'}
    ,
   { name : 'Audy'}
    ,
   { name : 'Augusta'}
    ,
   { name : 'Auguste'}
    ,
   { name : 'Augustina'}
    ,
   { name : 'Ayn'}
    ,
   { name : 'Bab'}
    ,
   { name : 'Babara'}
    ,
   { name : 'Babb'}
    ,
   { name : 'Bamby'}
    ,
   { name : 'Barb'}
    ,
   { name : 'Barbabra'}
    ,
   { name : 'Barbara'}
    ,
   { name : 'Barbara-Anne'}
    ,
   { name : 'Barbaraanne'}
    ,
   { name : 'Barby'}
    ,
   { name : 'Bari'}
    ,
   { name : 'Barrie'}
    ,
   { name : 'Barry'}
    ,
   { name : 'Basia'}
    ,
   { name : 'Bathsheba'}
    ,
   { name : 'Batsheva'}
    ,
   { name : 'Bea'}
    ,
   { name : 'Beatrice'}
    ,
   { name : 'Beatrisa'}
    ,
   { name : 'Beatrix'}
    ,
   { name : 'Beatriz'}
    ,
   { name : 'Bekki'}
    ,
   { name : 'Bel'}
    ,
   { name : 'Blondell'}
    ,
   { name : 'Blondelle'}
    ,
   { name : 'Blondie'}
    ,
   { name : 'Blondy'}
    ,
   { name : 'Blythe'}
    ,
   { name : 'Chickie'}
    ,
   { name : 'Chicky'}
    ,
   { name : 'Chiquia'}
    ,
   { name : 'Chiquita'}
    ,
   { name : 'Chrysler'}
    ,
   { name : 'Chrystal'}
    ,
   { name : 'Chryste'}
    ,
   { name : 'Chrystel'}
    ,
   { name : 'Clio'}
    ,
   { name : 'Clo'}
    ,
   { name : 'Cloe'}
    ,
   { name : 'Cloris'}
    ,
   { name : 'Clotilda'}
    ,
   { name : 'Demetria'}
    ,
   { name : 'Demetris'}
    ,
   { name : 'Dena'}
    ,
   { name : 'Deni'}
    ,
   { name : 'Denice'}
    ,
   { name : 'Denise'}
    ,
   { name : 'Estell'}
    ,
   { name : 'Estella'}
    ,
   { name : 'Estelle'}
    ,
   { name : 'Ester'}
    ,
   { name : 'Esther'}
    ,
   { name : 'Giustina'}
    ,
   { name : 'Gizela'}
    ,
   { name : 'Hannie'}
    ,
   { name : 'Hannis'}
    ,
   { name : 'Hanny'}
    ,
   { name : 'Happy'}
    ,
   { name : 'Harlene'}
    ,
   { name : 'Harley'}
    ,
   { name : 'Harli'}
    ,
   { name : 'Heddie'}
    ,
   { name : 'Hedi'}
    ,
   { name : 'Hedvig'}
    ,
   { name : 'Hedvige'}
    ,
   { name : 'Inger'}
    ,
   { name : 'Ingrid'}
    ,
   { name : 'Ingunna'}
    ,
   { name : 'Jazmin'}
    ,
   { name : 'Jean'}
    ,
   { name : 'Jeana'}
    ,
   { name : 'Jeane'}
    ,
   { name : 'Kary'}
    ,
   { name : 'Karyl'}
    ,
   { name : 'Karylin'}
    ,
   { name : 'Karyn'}
    ,
   { name : 'Kasey'}
    ,
   { name : 'Kass'}
    ,
   { name : 'Kassandra'}
    ,
   { name : 'Kassey'}
    ,
   { name : 'Kassi'}
    ,
   { name : 'Kassia'}
    ,
   { name : 'Kassie'}
    ,
   { name : 'Kat'}
    ,
   { name : 'Kata'}
    ,
   { name : 'Katalin'}
    ,
   { name : 'Kate'}
    ,
   { name : 'Katee'}
    ,
   { name : 'Katerina'}
    ,
   { name : 'Katerine'}
    ,
   { name : 'Katey'}
    ,
   { name : 'Kath'}
    ,
   { name : 'Lela'}
    ,
   { name : 'Lelah'}
    ,
   { name : 'Maud'}
    ,
   { name : 'Maude'}
    ,
   { name : 'Maudie'}
    ,
   { name : 'Maura'}
    ,
   { name : 'Maure'}
    ,
   { name : 'Maureen'}
    ,
   { name : 'Maureene'}
    ,
   { name : 'Maurene'}
    ,
   { name : 'Maurine'}
    ,
   { name : 'Maurise'}
    ,
   { name : 'Maurita'}
    ,
   { name : 'Maurizia'}
    ,
   { name : 'Mavis'}
    ,
   { name : 'Mavra'}
    ,
   { name : 'Max'}
    ,
   { name : 'Maxi'}
    ,
   { name : 'Olimpia'}
    ,
   { name : 'Olive'}
    ,
   { name : 'Olivette'}
    ,
   { name : 'Olivia'}
    ,
   { name : 'Quinta'}
    ,
   { name : 'Quintana'}
    ,
   { name : 'Quintilla'}
    ,
   { name : 'Quintina'}
    ,
   { name : 'Rachael'}
    ,
   { name : 'Rachel'}
    ,
   { name : 'Rochella'}
    ,
   { name : 'Rochelle'}
    ,
   { name : 'Rochette'}
    ,
   { name : 'Roda'}
    ,
   { name : 'Rodi'}
    ,
   { name : 'Rosemonde'}
    ,
   { name : 'Rosene'}
    ,
   { name : 'Rosetta'}
    ,
   { name : 'Rosette'}
    ,
   { name : 'Roshelle'}
    ,
   { name : 'Rosie'}
    ,
   { name : 'Rosina'}
    ,
   { name : 'Rosita'}
    ,
   { name : 'Tessa'}
    ,
   { name : 'Tessi'}
    ,
   { name : 'Tessie'}
    ,
   { name : 'Tessy'}
    ,
   { name : 'Thalia'}
    ,
   { name : 'Thea'}
    ,
   { name : 'Theadora'}
    ,
   { name : 'Theda'}
    ,
   { name : 'Thekla'}
    ,
   { name : 'Thelma'}
    ,
   { name : 'Tobias'}
    ,
   { name : 'Toby'}
    ,
   { name : 'Wynnie'}
    ,
   { name : 'Wynny'}
    ,
   { name : 'Xaviera'}
    ,
   { name : 'Xena'}
    ,
   { name : 'Xenia'}
    ,
   { name : 'Xylia'}
    ,
   { name : 'Xylina'}
    ,
   { name : 'Yalonda'}
    ,
   { name : 'Yasmeen'}
    ,
   { name : 'Yasmin'}
    ,
   { name : 'Yelena'}
    ,
   { name : 'Yetta'}
    ,
   { name : 'Yettie'}
    ,
   { name : 'Yetty'}
    ,
   { name : 'Yevette'}
    ,
   { name : 'Ynes'}
    ,
   { name : 'Ynez'}
    ,
   { name : 'Yoko'}
    ,
   { name : 'Yolanda'}
    ,
   { name : 'Yolande'}
    ,
   { name : 'Yolane'}
    ,
   { name : 'Yolanthe'}
    ,
   { name : 'Yoshi'}
    ,
   { name : 'Yoshiko'}
    ,
   { name : 'Yovonnda'}
    ,
   { name : 'Ysabel'}
    ,
   { name : 'Yvette'}
    ,
   { name : 'Yvonne'}
    ,
   { name : 'Zabrina'}
    ,
   { name : 'Zahara'}
    ,
   { name : 'Zandra'}
    ,
   { name : 'Zaneta'}
    ,
   { name : 'Zara'}
    ,
   { name : 'Zarah'}
    ,
   { name : 'Zaria'}
    ,
   { name : 'Zarla'}
    ,
   { name : 'Zea'}
    ,
   { name : 'Zelda'}
    ,
   { name : 'Zelma'}
    ,
   { name : 'Zena'}
    ,
   { name : 'Zenia'}
    ,
   { name : 'Zia'}
    ,
   { name : 'Zilvia'}
    ,
   { name : 'Zita'}
    ,
   { name : 'Zitella'}
    ,
   { name : 'Zoe'}
    ,
   { name : 'Zola'}
    ,
   { name : 'Zonda'}
    ,
   { name : 'Zondra'}
    ,
   { name : 'Zonnya'}
    ,
   { name : 'Zuzana'}
    ]
}