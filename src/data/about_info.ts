export interface CoreValue {
  icon: string
  title: string
  desc: string
}

export const aboutData = {
  hero: {
    eyebrow: 'ABOUT.HERO.EYEBROW',
    title: 'ABOUT.HERO.TITLE',
    description: 'ABOUT.HERO.DESC',
  },
  mission: {
    title: 'ABOUT.MISSION.TITLE',
    paragraphs: ['ABOUT.MISSION.P1', 'ABOUT.MISSION.P2'],
  },
  values: {
    title: 'ABOUT.VALUES.TITLE',
    items: [
      {
        icon: 'pi pi-palette',
        title: 'ABOUT.VALUES.V1_TITLE',
        desc: 'ABOUT.VALUES.V1_DESC',
      },
      {
        icon: 'pi pi-cog',
        title: 'ABOUT.VALUES.V2_TITLE',
        desc: 'ABOUT.VALUES.V2_DESC',
      },
      {
        icon: 'pi pi-handshake',
        title: 'ABOUT.VALUES.V3_TITLE',
        desc: 'ABOUT.VALUES.V3_DESC',
      },
    ] as CoreValue[],
  },
  cta: {
    title: 'ABOUT.CTA.TITLE',
    description: 'ABOUT.CTA.DESC',
    contacts: {
      phone: '0828.477.808',
      zalo: '0828477808',
      email: 'tuandtdeveloper@gmail.com',
    },
  },
}
