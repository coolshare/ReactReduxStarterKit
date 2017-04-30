import React from 'react';
import classNames from 'classnames';
import InfiniteTree from 'react-infinite-tree';
import 'react-infinite-tree/dist/react-infinite-tree.css';
import cs from '../../../services/CommunicationService'

export default class PatternsLeftPane extends React.Component {
    tree = null;

    componentDidMount() {
        this.tree.loadData(this.props.data);
        // Select the first node
        this.tree.selectNode(this.tree.getChildNodes()[0].getChildren()[0].getChildren()[0]);
    }
    render() {

        return (
            <div>
                <InfiniteTree
                    ref={(c) => {if (c!==null) this.tree = c.tree;}}
                    autoOpen={true}
                    loadNodes={(parentNode, done) => {
                        const suffix = parentNode.id.replace(/(\w)+/, '');
                        const nodes = [
                            {
                                id: 'node1' + suffix,
                                name: 'Node 1'
                            },
                            {
                                id: 'node2' + suffix,
                                name: 'Node 2'
                            }
                        ];
                        setTimeout(() => {
                            done(null, nodes);
                        }, 1000);
                    }}
                    rowRenderer={(node, treeOptions) => {
                        const { id, name, loadOnDemand = false, children, state, props = {} } = node;
                        const droppable = treeOptions.droppable;
                        const { depth, open, path, total, selected = false } = state;
                        const more = node.hasChildren();

                        return (
                            <div
                                className={classNames(
                                    'infinite-tree-item',
                                    { 'infinite-tree-selected': selected }
                                )}
                                data-id={id}
                                droppable={droppable}
                            >
                                <div
                                    className="infinite-tree-node"
                                    style={{ marginLeft: depth * 18 }}
                                >
                                    {!more && loadOnDemand &&
                                        <a className={classNames(treeOptions.togglerClass, 'infinite-tree-closed')}>►</a>
                                    }
                                    {more && open &&
                                        <a className={classNames(treeOptions.togglerClass)}>▼</a>
                                    }
                                    {more && !open &&
                                        <a className={classNames(treeOptions.togglerClass, 'infinite-tree-closed')}>►</a>
                                    }
                                    <span className="infinite-tree-title">{name}</span>
                                </div>
                            </div>
                        );
                    }}
                    selectable={true}
                    shouldSelectNode={(node) => {
                        if (!node || (node === this.tree.getSelectedNode())) {
                            return false; // Prevent from deselecting the current node
                        }
                        return true;
                    }}
                    onClick={(event) => {
                        // click event
                        const target = event.target || event.srcElement; // IE8
                        console.log('click:', target);
                        cs.dispatch({"type":"switchPage", "id":event.target.innerText})
                    }}
                    onDoubleClick={(event) => {
                        // dblclick event
                    }}
                    onKeyDown={(event) => {
                        // keydown event
                    }}
                    onKeyUp={(event) => {
                        // keyup event
                    }}
                    onOpenNode={(node) => {
                        console.log('open node:', node);
                    }}
                    onCloseNode={(node) => {
                        console.log('close node:', node);
                    }}
                    onSelectNode={(node) => {
                        console.log('select node:', node);
                    }}
                    onClusterWillChange={() => {
                    }}
                    onClusterDidChange={() => {
                    }}
                    onContentWillUpdate={() => {
                    }}
                    onContentDidUpdate={() => {
                    }}
                />
            </div>
        );
    }
}

