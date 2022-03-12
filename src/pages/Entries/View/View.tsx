import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { JournalContext } from '../../../context/JournalContext';
import { Header } from '../../_layout';
import { Article } from '../../../components';

export default function EntriesView() {
    const { journalName, entries } = useContext(JournalContext);
    let { id, entryId }: any = useParams();

    return (
        <section className="background">
            <Header model="authenticated" />
              <div className="flex flex--column">
                  <Link className="navigation" to={ `/journal/${id}/posts` }>{ `< ${ journalName }` }</Link>
                  <div className="flex flex--column">
                      <Article
                        title={(entries[entryId] as any).title}
                        content={(entries[entryId] as any).content}
                        type="fullwidth"
                      />
                </div>
            </div>
        </section>
    );
}
