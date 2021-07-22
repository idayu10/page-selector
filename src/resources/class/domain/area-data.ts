export interface AreaData {
  id: string;
  name: string;
  createdAt: Date | null;
  createdBy: string;
  updatedAt: Date | null;
  updatedBy: string;
}

export class AreaDataImpl implements AreaData {
  id = '';
  name = '';
  createdAt = new Date();
  createdBy = '';
  updatedAt = new Date();
  updatedBy = '';
}
