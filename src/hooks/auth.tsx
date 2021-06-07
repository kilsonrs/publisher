import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface ReportProviderProps {
  children: ReactNode;
}

interface IReport {
  id: string;
  name: string;
  hour: number;
  publications: number;
  revisits: number;
  studies: number;
  videos: number;
}

interface IReportFormData {
  [key: string]: string | number;
}

interface ReportContextData {
  report: IReport;
  save: (data: IReportFormData) => void;
}

const ReportContext = createContext({} as ReportContextData);

function ReportProvider({ children }: ReportProviderProps): JSX.Element {
  const [report, setReport] = useState({} as IReport);

  function save() {
    // setReport();
  }

  return (
    <ReportContext.Provider
      value={{
          report,
          save,
        } as ReportContextData
      }
    >
      {children}
    </ReportContext.Provider>
  );
}

function useReport(): ReportContextData {
  const context = useContext(ReportContext);
  return context;
}

export { ReportProvider, useReport };
