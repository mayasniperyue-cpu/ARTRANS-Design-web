export interface NavElement {
  label: string;
  href: string;
}

export interface Advisor {
  label: string;
  desc: string;
}

export interface Pillar {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  thumb: string;
  images: string[];
  desc: string;
  expertise: string[];
  highlights: string[];
}

export interface ConsortiumStep {
  num: string;
  label: string;
  title: string;
  desc: string;
}

export interface Scenario {
  num: string;
  title: string;
  tags: string[];
  img: string;
}
