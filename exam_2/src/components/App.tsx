import React from 'react';
import TranslationUtils from '../utils/index';

import SelectBox from './SelectBox';

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
                <div className="form-group w-100">
                  <label htmlFor="lang-from">Select language</label>
                  <select className="form-control" id="lang-from" name="lang-from">
                    <option value={undefined}>{"Detect"}</option>
                    {options}
                  </select>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group w-100">
                  <label htmlFor="TranslationTextarea">Text to translate</label>
                  <textarea className="form-control" id="TranslationTextarea" style={{resize:"none"}} rows={5}></textarea>
                </div>
              </div>
            </div>
            <div className="form-group col-md-2 align-self-center">
              <div className="row justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Translate
                  <svg className="bi bi-arrow-bar-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H6.5A.5.5 0 016 8zm-2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="form-group w-100">
                  <label htmlFor="lang-to">Select language</label>
                  <select className="form-control" id="lang-to" name="lang-to">
                    {options}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group w-100">
                  <label htmlFor="TranslationTextarea">Translated text</label>
                  <textarea className="form-control bg-white text-body" id="TranslationTextarea" style={{resize:"none"}} rows={5} readOnly disabled value={this.state.translation}></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
