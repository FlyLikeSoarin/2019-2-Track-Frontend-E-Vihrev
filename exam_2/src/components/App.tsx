import React from 'react';
import TranslationUtils from '../utils/index';

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
      console.log(languages.langs);

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
      <div>
        <form ref={this.formRef} onSubmit={(evt: any)=>{
          evt.preventDefault();
          let langFrom: string | undefined = this.formRef.current[0].value === 'Detect' ? undefined : this.formRef.current[0].value;
          let text: string = this.formRef.current[1].value;
          let langTo: string = this.formRef.current[2].value;

          TranslationUtils.translate(
            text,
            langFrom,
            langTo,
            (t: TranslationUtils.translation) => {
              console.log(
                t
              );

              this.updateTranslationBounded(
                t.text
              )
            }
          )
        }}>
          <select id="lang-from" name="lang-from">
            <option value={undefined}>{"Detect"}</option>
            {options}
          </select>
          <input type="text" id="text-from" name="text-from" placeholder="Text to translate..." />
          <select id="lang-to" name="lang-to">
            {options}
          </select>
          <div>
            {this.state.translation}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
