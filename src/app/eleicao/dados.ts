export interface Dados{
  dg: string;
  hg: string;
  f: string;
  abr: Abr[];
}

export interface Abr{
  cd: string;
  ds: string;
  mu: Mu[];
}

export interface Mu{
  cd: string;
  cdi: string;
  nm: string;
  c: string;
  z: string[];
}

