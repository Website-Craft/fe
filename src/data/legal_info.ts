export interface LegalContent {
  title: string
  blocks: {
    heading?: string
    text?: string[]
    list?: string[]
  }[]
}

export const legalData: LegalContent[] = [
  {
    title: 'LEGAL.SEC_1.TITLE',
    blocks: [
      {
        text: ['LEGAL.SEC_1.T1', 'LEGAL.SEC_1.T2'],
      },
    ],
  },
  {
    title: 'LEGAL.SEC_2.TITLE',
    blocks: [
      {
        heading: 'LEGAL.SEC_2.H1',
        text: ['LEGAL.SEC_2.T1'],
      },
      {
        heading: 'LEGAL.SEC_2.H2',
        list: ['LEGAL.SEC_2.L1', 'LEGAL.SEC_2.L2', 'LEGAL.SEC_2.L3'],
      },
    ],
  },
  {
    title: 'LEGAL.SEC_3.TITLE',
    blocks: [
      {
        text: ['LEGAL.SEC_3.T1'],
      },
      {
        heading: 'LEGAL.SEC_3.H1',
        list: ['LEGAL.SEC_3.L1', 'LEGAL.SEC_3.L2', 'LEGAL.SEC_3.L3'],
      },
      {
        heading: 'LEGAL.SEC_3.H2',
        list: ['LEGAL.SEC_3.L4', 'LEGAL.SEC_3.L5', 'LEGAL.SEC_3.L6'],
      },
    ],
  },
  {
    title: 'LEGAL.SEC_4.TITLE',
    blocks: [
      {
        text: ['LEGAL.SEC_4.T1', 'LEGAL.SEC_4.T2'],
      },
    ],
  },
  {
    title: 'LEGAL.SEC_5.TITLE',
    blocks: [
      {
        text: ['LEGAL.SEC_5.T1'],
      },
    ],
  },
  {
    title: 'LEGAL.SEC_6.TITLE',
    blocks: [
      {
        text: ['LEGAL.SEC_6.T1'],
      },
    ],
  },
]
