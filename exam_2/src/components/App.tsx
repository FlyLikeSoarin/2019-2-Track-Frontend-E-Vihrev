import React from 'react';
import TranslationUtils from '../utils/index';

import SelectBox from './SelectBox';
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';

const languages: string[] = ['ru', 'en']


interface AppState {
  translation: string,
  langs: TranslationUtils.languageList,
};

interface AppProps {

};


function getLanguageOptions(languageList: TranslationUtils.languageList): JSX.Element[] {
  let options: JSX.Element[] = []
  let langCodes: string[] = Object.keys(languageList);

  for (let i: number = 0; i < langCodes.length; i += 1){
    const langCode: string = langCodes[i];
    const langName: string = languageList[langCode];
    options.push(<option value={langCode}>{langName}</option>);
  }
  return options;
}


class App extends React.Component<AppProps, AppState> {
  public updateLanguagesBounded: Function;
  public updateTranslationBounded: Function;
  public formRef: any;

  constructor(props: object) {
    super(props)
    this.state = {
      translation: '',
      langs: {'ru': 'Russian', 'en': 'English'},
    }

    this.formRef = React.createRef();
    this.updateLanguagesBounded = this.updateLanguages.bind(this);
    this.updateTranslationBounded = this.updateTranslation.bind(this);
  }

  componentDidMount(): void {
    TranslationUtils.getLanguages((languages: TranslationUtils.languages)=>{
      this.updateLanguagesBounded(languages.langs)
    })
  }

  updateLanguages(newLanguageList: TranslationUtils.languageList): void {
    this.setState({langs: newLanguageList})
  }

  updateTranslation(newTranslation: string[]): void {
    this.setState({translation: newTranslation[0]})
  }

  render() {
    const options: JSX.Element[] = getLanguageOptions(this.state.langs);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1><span className="badge badge-primary">Translate.mail.ru</span></h1>
        </div>
        <form ref={this.formRef} onSubmit={(evt: any)=>{
          evt.preventDefault();
          let langFrom: string | undefined = this.formRef.current[0].value === 'Detect' ? undefined : this.formRef.current[0].value;
          let text: string = this.formRef.current[1].value;
          let langTo: string = this.formRef.current[3].value;

          TranslationUtils.translate(
            text,
            langFrom,
            langTo,
            (t: TranslationUtils.translation) => {this.updateTranslationBounded(t.text)}
          )
        }}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="row justify-content-end">
                <SelectBox ID="langFrom" label="Select Language" options={options} detect={true} />
              </div>
              <div className="row justify-content-end">
                <TextArea isInput={true} />
              </div>
            </div>
            <div className="form-group col-md-2 align-self-center">
              <div className="row justify-content-center">
                <SubmitButton />
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <SelectBox ID="langTo" label="Select Language" options={options} detect={false} />
              </div>
              <div className="row">
                <TextArea isInput={false} value={this.state.translation} />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
